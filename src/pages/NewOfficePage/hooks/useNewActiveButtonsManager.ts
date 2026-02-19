import { useState } from "react";

export function useNewActiveButtonsManager() {
  const [isButtonActiveOfficeTasks, setIsButtonActiveOfficeTasks] = useState<
    "office" | "tasks"
  >("office");
  const [isButtonActiveDayTraders, setIsButtonActiveDayTraders] = useState<
    "all" | "occupied" | "empty"
  >("all");
  const [isButtonActiveTasks, setIsButtonActiveTasks] = useState<
    "daily" | "weekly" | "season" | "social"
  >("daily");

  return {
    isButtonActiveOfficeTasks,
    setIsButtonActiveOfficeTasks,
    isButtonActiveDayTraders,
    setIsButtonActiveDayTraders,
    isButtonActiveTasks,
    setIsButtonActiveTasks,
  };
}
