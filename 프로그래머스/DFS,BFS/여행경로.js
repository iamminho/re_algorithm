// version1
function solution(tickets) {
  let obj = new Object();
  let times = new Object();
  tickets.forEach((ele) => {
    obj[ele[0]]
      ? (obj[ele[0]] = [...obj[ele[0]], ele[1]].sort())
      : (obj[ele[0]] = [ele[1]]);
  });
  tickets.forEach((ele) => {
    times[ele[1]] ? (times[ele[1]] += 1) : (times[ele[1]] = 1);
  });
  let answer = [];
  let result = ["ICN"];
  function dfs(L, cur) {
    if (L === tickets.length) {
      if (answer.length < 2) {
        answer.push([...result]);
        return;
      }
    } else {
      for (let i = 0; i < obj[cur].length; i++) {
        if (times[obj[cur][i]] > 0) {
          times[obj[cur][i]] -= 1;
          result.push(obj[cur][i]);
          dfs(L + 1, obj[cur][i]);
          result.pop();
          times[obj[cur][i]] += 1;
        }
      }
    }
  }
  dfs(0, "ICN");
  return answer[0];
}

// other people's
function solution(tickets) {
  let answer = [];
  function dfs(airport, tickets, path) {
    console.log("-----------------");
    console.log("airport, tickets, path:", airport, "/", tickets, "/", path);
    let newPath = [...path, airport];
    console.log("newPath", newPath);
    if (tickets.length === 0) answer.push(newPath);
    else {
      tickets.map((ticket, idx) => {
        console.log("ticket, ticket[0]:", ticket, "/", ticket[0]);
        if (ticket[0] === airport) {
          let copiedTickets = [...tickets];
          console.log("copiedTickets:", copiedTickets);
          let [[from, to]] = copiedTickets.splice(idx, 1);
          console.log("from,to:", from, "/", to);
          dfs(to, copiedTickets, newPath);
        }
      });
    }
  }
  dfs("ICN", tickets, []);
  return answer.sort()[0];
}

// version2
function solution(tickets) {
  let answer = [];
  let dfs = (cur, tickets, path = []) => {
    let newPath = [...path, cur];
    if (tickets.length === 0) {
      answer.push(newPath);
    } else {
      tickets.forEach((ticket, idx) => {
        if (ticket[0] === cur) {
          let next = ticket[1];
          let newTickets = [...tickets];
          newTickets.splice(idx, 1);
          dfs(next, newTickets, newPath);
        }
      });
    }
  };
  dfs("ICN", tickets);
  answer.sort();
  return answer[0];
}
