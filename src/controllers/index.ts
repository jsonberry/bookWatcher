import { Request, Response } from 'express';
import * as models from '../models';
import * as services from '../services';
import * as utils from '../utils';

export async function createBook(
    req: Request,
    res: Response
): Promise<Response> {
    const book: models.Book = { ...req.body };
    const values: any[] = Object.keys(book).map(el => book[el]);
    const placeholders = Object.keys(book)
        .map(() => '?')
        .join(',');

    try {
        const rowId = await services.createBook(values, placeholders);
        if (rowId) {
            return res.status(200).json({
                status: 200,
                data: {
                    ...req.body,
                    rowId
                },
                message: `Successfully added ${req.body.title}`
            });
        }
    } catch (errorMessage) {
        return res.status(500).json({ status: 500, errorMessage });
    }
}

export async function getBooks(req: Request, res: Response): Promise<Response> {
    if (req.query.author) {
        try {
            const data = await services.getBooksByAuthor(req.query.author);
            return data.length
                ? res.status(200).json({
                      status: 200,
                      data,
                      message: `Successfully retreived books by: ${
                          req.query.author
                      }`
                  })
                : res.status(404).json({
                      status: 404,
                      data,
                      message: `No books found by: ${req.query.author}`
                  });
        } catch (error) {
            return res
                .status(400)
                .json({ status: 400, message: error.message });
        }
    }

    try {
        const data = await services.getAllBooks();
        return data.length
            ? res.status(200).json({
                  status: 200,
                  data,
                  message: 'Successfully retreived all books'
              })
            : res.status(404).json({
                  status: 404,
                  data,
                  message: 'No books found'
              });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

export async function getBook(req: Request, res: Response): Promise<Response> {
    try {
        const data = await services.getBook(req.params.id);
        return data
            ? res.status(200).json({
                  status: 200,
                  data,
                  message: `Successfully retreived book ID: ${req.params.id}`
              })
            : res.status(404).json({
                  status: 404,
                  data,
                  message: `No book found with ID: ${req.params.id}`
              });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }
}

export async function updateBook(
    req: Request,
    res: Response
): Promise<Response> {
    if (utils.isReqBodyEmpty(req.body)) {
        return res
            .status(400)
            .json({ status: 400, message: 'Body required for update' });
    }

    let book;
    try {
        book = await services.getBook(req.params.id);
        if (!book) {
            return res.status(404).json({
                status: 404,
                data: book,
                message: `No book found with ID: ${req.params.id}`
            });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }

    try {
        const data = await services.updateBook(
            utils.mapBookRelations({
                ...book,
                ...req.body
            })
        );
        return data
            ? res.status(200).json({
                  status: 200,
                  data: {
                      updated: {
                          ...req.body
                      }
                  },
                  message: `Successfully updated Book at rowid: ${
                      req.params.id
                  }`
              })
            : res.status(500).json({
                  status: 500,
                  data,
                  message: `Update seemed to fail...`
              });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error });
    }
}

export async function deleteBook(
    req: Request,
    res: Response
): Promise<Response> {
    try {
        const data = await services.getBook(req.params.id);
        if (!data) {
            return res.status(404).json({
                status: 404,
                data,
                message: `No book found with ID: ${req.params.id}`
            });
        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: error.message });
    }

    try {
        const data = await services.deleteBook(req.params.id);
        return data
            ? res.status(200).json({
                  status: 200,
                  data,
                  message: `Successfully deleted book ID: ${req.params.id}`
              })
            : res.status(404).json({
                  status: 404,
                  data,
                  message: `No book found with ID: ${req.params.id}`
              });
    } catch (error) {
        return res.status(500).json({ status: 500, message: error });
    }
}
