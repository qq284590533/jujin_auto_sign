
const Koa = require('koa')
const schedule  = require('node-schedule')
const {signIn} = require('./app')

const app = new Koa()

let rule = new schedule.RecurrenceRule()
/** 每天的9点30分执行签到任务 **/
rule.hour = 9
rule.minute = 30
rule.second = 0

/**启动任务*/
schedule.scheduleJob(rule, () => {
  signIn()
})

app.listen(3000)
