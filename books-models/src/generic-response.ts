export interface GenericGenerationResponse<T> {
    (status: number, data: T, message: string): GenericResponse<T>
}

export interface GenericResponse<T> {
    status: number
    data: T
    message: string
}
