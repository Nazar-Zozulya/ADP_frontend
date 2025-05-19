export interface IError {
    status: 'error'
    message: string
    code?: number
}

export interface ISuccess<T> {
    status: 'success'
    data: T
}

export type Result<T> = IError | ISuccess<T>