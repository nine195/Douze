const typeTime = {
    year: ["YYYY", 'yyyy'],
    month: ['MM'],
    day: ["DD", 'dd'],
    hour: ["hh", 'HH'],
    minute: ["mm"],
    second: ["ss", 'SS'],
};
// 时间格式返回
function Time (Timestamp, type = 'YYYY-MM-DD hh:mm:ss'){
    try {
        let times = typeof Timestamp;
        if (isNaN(times) || times === 'string' && (typeof type) === 'string') {
            const date = new Date(Timestamp);
            const TimeData = {
                year: date.getFullYear(),
                month: ("0" + (date.getMonth() + 1)).slice(-2),
                day: ("0" + date.getDate()).slice(-2),
                hour: ("0" + date.getHours()).slice(-2),
                minute: ("0" + date.getMinutes()).slice(-2),
                second: ("0" + date.getSeconds()).slice(-2)
            }
            let formattedDate = type.replace("HHHH", TimeData.year);
            for (const key in typeTime) {
                typeTime[key].forEach(element => {
                    formattedDate = formattedDate.replace(element, TimeData[key]);
                });
            }
            return formattedDate
        } else {
            throw 'Whether parameter 1 is a number or string, and parameter 2 is a string(参数一是否为数字或者字符串类型，参数二是否为字符串)'
        }
    } catch (error) {
        console.error(error)

    }

};

// 人性化时间
function formatTime(datetime) {
    if (datetime == null) {
      return '';
    }
  
    let time = new Date();
    let outTime = new Date(datetime);
  
    if (/^[1-9]\d*$/.test(datetime)) {
      outTime = new Date(parseInt(datetime));
    }
  
    const diff = time.getTime() - outTime.getTime();
    const yearDiff = time.getFullYear() - outTime.getFullYear();
    const monthDiff = time.getMonth() - outTime.getMonth();
    const dateDiff = time.getDate() - outTime.getDate();
  
    if (yearDiff > 0 || diff < 0) {
      return parseTime(outTime, '{y}-{m}-{d} {h}:{i}');
    }
  
    if (monthDiff !== 0) {
      return parseTime(outTime, '{m}-{d} {h}:{i}');
    }
  
    if (dateDiff === -1) {
      return parseTime(outTime, '昨天 {h}:{i}');
    }
  
    if (dateDiff === -2) {
      return parseTime(outTime, '前天 {h}:{i}');
    }
  
    if (dateDiff !== 0) {
      return parseTime(outTime, '{m}-{d} {h}:{i}');
    }
  
    if (time.getHours() !== outTime.getHours() || diff > 30 * 60 * 1000) {
      return parseTime(outTime, '{h}:{i}');
    }
  
    const minutesDiff = outTime.getMinutes() - time.getMinutes();
    const absMinutesDiff = Math.abs(minutesDiff);
  
    if (absMinutesDiff === 0) {
      return '刚刚';
    }
  
    return `${absMinutesDiff}分钟前`;
  }

function parseTime(time, cFormat) {
    if (!time) {
      return null;
    }
  
    const date = time instanceof Date ? time : new Date(Number(time) || time);
  
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay(),
    };
  
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  
    const time_str = format.replace(/{([ymdhisa])}/g, (_, key) => {
      const value = formatObj[key];
      if (key === 'a') {
        return ['日', '一', '二', '三', '四', '五', '六'][value];
      }
      return value.toString().padStart(2, '0');
    });
  
    return time_str;
  }



export default{
    Time,
    formatTime
}