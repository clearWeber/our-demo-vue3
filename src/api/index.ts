import service from "@/utils/service"

export default {
  test (params?: object) {
    return service.request({
      url: 'test.json'
    })
  }
}
