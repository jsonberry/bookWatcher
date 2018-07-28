const moment = require('moment')
const _ = require('lodash')

const book = 'The Man in The High Castle'
const pages = 274
const startDate = moment('2017-06-27')
const dueDate = moment('2017-07-30')
const finishedDate = moment('2017-07-20')
const daysToFinish = dueDate.diff(startDate, 'days')
const pagesPerDay = pages / daysToFinish
const pageMap = mapPagestoDay(daysToFinish, pagesPerDay, startDate)

let now = moment()
let daysRemaining = dueDate.diff(now, 'days')
let curDay = daysToFinish - daysRemaining
let place = 274
let pagesRemaining = pages - place

let todayGoal = pageMap.find((goal) => goal.day === curDay)
let tomorrowGoal = pageMap.find((goal) => goal.day === (curDay + 1))
let statusMessage = checkStatus(todayGoal, tomorrowGoal, place, pagesPerDay, pages).message
let status = checkStatus(todayGoal, tomorrowGoal, place, pagesPerDay, pages).status
let daysToComplete, pagesReadPerDay

if (status == 'finished') {
    daysToComplete = moment(finishedDate).diff(startDate, 'days')
    pagesReadPerDay = pages / daysToComplete
}

const obj = {
    book,
    pages,
    startDate: startDate.format('MMM DD, YYYY'),
    dueDate: dueDate.format('MMM DD, YYYY'),
    finishedDate: finishedDate ? finishedDate.format('MMM DD, YYYY') : 'Not yet finished!',
    daysToFinish,
    pagesPerDay: `~${Math.round(pagesPerDay)}`,
    pageMap,
    now: now.format('MMM DD, YYYY'),
    daysRemaining,
    curDay,
    place,
    pagesRemaining,
    statusMessage,
    status,
    daysToComplete,
    pagesReadPerDay
}

if (status === 'finished') {
    console.log(
        '\n',
        '-------------------------------------------------------------------------------------------\n',
        `| ${statusMessage}\n`,
        '-------------------------------------------------------------------------------------------\n',
        '\n',
        `${obj.book}\n`,
        `${obj.pages} pages\n`,
        `Started: ${obj.startDate}\n`,
        `Finished: ${obj.finishedDate}\n`,
        `Days took to complete: ${obj.daysToComplete}\n`,
        `Pages Read Per Day: ${obj.pagesReadPerDay}\n`
    )
} else {
    console.log(
        '\n',
        '-------------------------------------------------------------------------------------------\n',
        `| ${statusMessage}\n`,
        '-------------------------------------------------------------------------------------------\n',
        '\n',
        `${obj.book}\n`,
        `${obj.pages} pages\n`,
        `Days Remaining: ${obj.daysRemaining}\n`,
        `Pages Remaining: ${obj.pagesRemaining}\n`,
        `Started: ${obj.startDate}\n`,
        `Due Date: ${obj.dueDate}\n`,
        `Pages per day: ${obj.pagesPerDay}\n`,
        `Place: ${place}\n`
    )
}

function mapPagestoDay(...params) {
    const [ daysToFinish, pagesPerDay, startDate ] = _.cloneDeep(params);
    const dayArr = buildDayArr(daysToFinish)
    let curPage = pagesPerDay

    return dayArr.reduce((arr, day) => {
        arr.push({
            date: startDate.format('MMM DD, YYYY'),
            pageGoal: Math.floor(curPage),
            day: day
        })
        curPage += pagesPerDay
        startDate.add(1, 'd')
        return arr
    }, [])
}

function buildDayArr(daysToFinish) {
    let dayArr = []
    let dayNum = 1

    do {
        dayArr.push(dayNum)
        dayNum++
    } while(dayNum <= daysToFinish)

    return dayArr
}

function checkStatus(today, tomorrow, place, pagesPerDay, pages) {
    let messages
    if (!today && place === pages) {
        messages = {
            finished: 'Congratulations! You finished a book!'
        }
    } else {
        messages = {
            goalMet: 'You\'re right on target! Pick it up again tomorrow.',
            keepGoing: `You're on track! Read ${today.pageGoal - place} page(s) today up through page ${today.pageGoal} to stay on track.`,
            behind: `You're behind! Read [${Math.ceil(today.pageGoal - place)} page(s)] today up through [page ${today.pageGoal}] to catch up!`,
            ahead: `You're ahead of your daily goal! Time to relax ;)`,
            finished: 'Congratulations! You finished a book!'
        }
    }

    switch (true) {
        case place === pages:
            return {
                status: 'finished',
                message: messages.finished
            }
        case (place + pagesPerDay) < today.pageGoal:
            return {
                status: 'behind',
                message: messages.behind
            }
        case place === today.pageGoal:
            return {
                status: 'goalMet',
                message: messages.goalMet
            }
        case (today.pageGoal - place) > 0 &&  (today.pageGoal - place) <= Math.floor(pagesPerDay):
            return {
                status: 'keepGoing',
                message: messages.keepGoing
            }
        case place > today.pageGoal:
            return {
                status: 'ahead',
                message: messages.ahead
            }
    }
}
