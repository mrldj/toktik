import request from '@/utils/request'

function getVideoList(query) {
  return request({
    dataType: 'json',
    url: '/video',
    method: 'get',
    params: {
      id: query.id,
      createBy: query.createBy,
      videoUrl: query.videoUrl,
      remarks: query.remarks
    }
  })
}

export default {
  getVideoList
}
