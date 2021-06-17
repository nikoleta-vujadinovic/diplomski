import { api } from "./Api"

import Plan from "../models/Plan"

class PlanService {
  createPlan = (plan) =>
    api
      .post("/plan/create.php", {
        name: plan.name,
        description: plan.description,
        pricePerMeal: plan.pricePerMeal,
      })
      .then((plan) => new Plan(plan))

  getAllPlans = () =>
    api
      .get("/plan/read.php")
      .then((plans) => plans.map((plan) => new Plan(plan)))

  getPlanById = (id) =>
    api.get("/plan/read.php/?id=" + id).then((plan) => new Plan(plan))

  updatePlan = (plan) =>
    api
      .put("/plan/update.php/?id=" + plan.id, {
        name: plan.name,
        description: plan.description,
        pricePerMeal: plan.pricePerMeal,
      })
      .then((plan) => new Plan(plan))

  deletePlan = (id) => api.get("/plan/delete.php?id=" + id)
}

export const planService = new PlanService()
