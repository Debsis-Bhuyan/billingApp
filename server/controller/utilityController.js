import Feedback from "../models/feedbackModel.js";
import Help from "../models/helpModel.js";

export const feedbackForm = async (req, res) => {
  const { userId, fullName, email, message } = req.body;
  console.log(userId);
  try {
    const feedback = await Feedback.create({userId, fullName, email, message });

    res.json({ message: "Feedback received successfully", feedback });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "An error occurred while saving feedback" });
  }
};
export const helpForm = async (req, res) => {
  const { fullName, email, message } = req.body;
  try {
    const help = await Help.create({ fullName, email, message });

    res.json({ message: "Feedback received successfully", help });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "An error occurred while saving feedback" });
  }
};
