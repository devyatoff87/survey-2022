import del from "del"

export const resetTask = () => {
    return del(app.path.clean)
}