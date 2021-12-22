import { Router } from "express"
import { CreateTaskController } from "./controllers/CreateTaskController"
import { DeleteTaskController } from "./controllers/DeleteTaskController"
import { GetAllTasksController } from "./controllers/GetAllTasksController"
import { GetTaskController } from "./controllers/GetTaskController"
import { UpdateTaskController } from "./controllers/UpdateTaskController"

const routes = Router()

//tasks
routes.post("/", new CreateTaskController().handle)
routes.get("/", new GetAllTasksController().handle)
routes.get("/:id", new GetTaskController().handle)
routes.delete("/:id", new DeleteTaskController().handle)
routes.put("/:id", new UpdateTaskController().handle)

export { routes }