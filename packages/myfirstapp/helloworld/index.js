async function main(args) {
    return { body: "hello world  ! Node env is  due to"+process.env.NODE_ENV };
}

module.exports =  {main}
