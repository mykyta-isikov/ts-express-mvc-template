import { type Request, type Response } from 'express';

export default class HealthController {
    public async checkHealth(req: Request, res: Response): Promise<void> {
        res.status(200).json({
            status: 'OK',
            message: 'This API is working fine!',
        });
    }
}
