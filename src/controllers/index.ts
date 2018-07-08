import * as services from '../services';
import { Request, Response, NextFunction } from 'express';

export async function getBooks(
    req: Request,
    res: Response,
    next: NextFunction
) {
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
        return res.status(400).json({ status: 400, message: error.message });
    }
}

export async function getBook(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await services.getBook(req.params.id);
        return data.length
            ? res.status(200).json({
                  status: 200,
                  data,
                  message: `Successfully retreived book ID: ${req.params.id}`
              })
            : res
                  .status(404)
                  .json({
                      status: 404,
                      data,
                      message: `No book found with ID: ${req.params.id}`
                  });
    } catch (error) {
        return res.status(400).json({ status: 400, message: error.message });
    }
}
