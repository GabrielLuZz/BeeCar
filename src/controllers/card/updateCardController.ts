import { AppError } from "../../errors/AppError";
import updateCardService from "../../services/card/updateCard.service";
import { Response, Request } from "express";
import { handleError } from "../../middlewares/errors.mid";

const updateCardController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { cardNumber, validate, name } = req.body;

    const card = await updateCardService(id, { cardNumber, validate, name });

    return res.status(200).json({ card, message: "CardUpdated" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default updateCardController;
