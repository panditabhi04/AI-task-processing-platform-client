import api from "../../../../utils/api"

export const addTask = async (taskData) => {
    try {
        const res = await api.post("/task/add-task", taskData)

        console.log("Task Response:", res.data)

        return {
            task: res.data.data,
            message: res.data.message,
        }

    } catch (error) {
        console.error("Add Task API Error:", error)

        //  Handle different error cases
        if (error.response) {
            // Server responded with error (4xx / 5xx)
            throw new Error(error.response.data?.message || "Server Error")
        } else if (error.request) {
            // Request made but no response
            throw new Error("No response from server")
        } else {
            // Something else
            throw new Error(error.message || "Something went wrong")
        }
    }
}



export const fetchTasks = async () => {
    try {
        const res = await api.get("/task");
        console.log("res : ", res);

        return res.data.data.tasks;
    } catch (error) {
        console.log("ERROR : ", error);

    }

};