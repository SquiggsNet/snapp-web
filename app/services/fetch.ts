import Service from '@ember/service';

interface RequestOptions extends RequestInit {
  body?: string;
}

interface ApiError {
  message: string;
  status?: number;
}

export default class FetchService extends Service {
  private baseUrl = '/api'; // Configure in environment.js if needed

  private async request<T>(
    path: string,
    options: RequestOptions = {},
  ): Promise<T> {
    const url = `${this.baseUrl}${path}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const error: ApiError = {
        message: 'Request failed',
        status: response.status,
      };

      try {
        const errorData = await response.json();
        error.message = errorData.message || error.message;
      } catch {
        // Use default error message
      }

      throw new Error(error.message);
    }

    return response.json();
  }

  async fetchGet<T>(path: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(path, {
      method: 'GET',
      ...options,
    });
  }

  async post<T>(path: string, options: RequestOptions = {}): Promise<T> {
    return this.request<T>(path, {
      method: 'POST',
      ...options,
    });
  }
}

// Ensure proper typing support
declare module '@ember/service' {
  interface Registry {
    fetch: FetchService;
  }
}
