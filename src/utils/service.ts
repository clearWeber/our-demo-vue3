interface IbaseOptions {
  url: string,
  data?: object,
  header?: object,
  method?: string,
  timeout?: number,
  dataType?: string
}

class Service {
  baseOptions: IbaseOptions = {
    url: 'https://dengcaocao.github.io/',
    data: {},
    header: {},
    method: 'GET',
    timeout: 10000,
    dataType: 'json'
  }
  request (options: IbaseOptions) {
    uni.showLoading({
      title: '努力加载中'
    })
    return new Promise((resolve, reject) => {
      const completeOptions: any = {
        ...this.baseOptions,
        ...options,
        url: this.baseOptions.url + options.url
      }
      uni.request({
        ...completeOptions,
        success: (res: unknown) => resolve(res),
        fail: (error: unknown) => reject(error),
        complete: () => uni.hideLoading()
      })
    })
  }
}

export default new Service()
