const successResponse = (data) => {
	return {
    code: 200,
    data,
		msg: '操作成功'
  }
}

exports.successResponse = successResponse
