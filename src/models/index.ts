export interface Book {
    author: string;
    dueDate: string;
    finishedDate: string;
    pages: number;
    place: number;
    rowid?: number;
    startDate: string;
    status: string;
    title: string;
}

export interface BookValuesMapped {
    $author: string;
    $dueDate: string;
    $finishedDate: string;
    $pages: number;
    $place: number;
    $rowid?: number;
    $startDate: string;
    $status: string;
    $title: string;
}
