//API统一管理
import requests from "./request";

// 查看项目
export const updateProject = (templateid) => requests({
    url: `/getone?templateid=${templateid}`,
    method: 'post'
})


