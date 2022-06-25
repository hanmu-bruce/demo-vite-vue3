import { post, get } from "src/utils/request";
export const getStudentList = (data) => {
  return post("/student/list", data);
};
