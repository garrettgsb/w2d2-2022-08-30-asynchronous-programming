const tickets = [];
const fans = [];
let newTickets = '';
const numberOfFans = 1000;
const maxFanCheckinRate = 10000;
const maxTicketsPerRelease = 100;

function createFan() {
  const fan = {
    state: '🙇‍♀️',
    wakeUp() {
      this.state = '🙇‍♀️';
    },

    tryToObtainTicket() {
      if (!(this.state === '🙇‍♀️')) return;

      const ticket = tickets.pop();
      if (ticket) {
        ticket.owner = this;
        this.ticket = ticket;
        this.state = '🏃‍♀️';
        const c = this.attendConcert.bind(this);
        setTimeout(c, 2000);
      }
    },

    attendConcert() {
      if (!this.ticket) { console.log(this); throw new Error('Tried to attend concert without ticket!') }
      this.state = '👩‍🎤';
      const l = this.leaveConcert.bind(this);
      setTimeout(l, 4000);
    },

    leaveConcert() {
      this.state = '🛌';
      this.ticket = null;
      const w = this.wakeUp.bind(this);
      setTimeout(w, 15000);
    }
  };
  const t = fan.tryToObtainTicket.bind(fan);
  const tryToObtainInterval = Math.floor(Math.random() * maxFanCheckinRate);
  setInterval(t, tryToObtainInterval);
  return fan;
}

function createTicket() {
  return { owner: null };
}

function updateTerminal(message) {
  console.clear();
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(message);
}

for (let i = 0; i < numberOfFans; i++) {
  fans.push(createFan());
}


function circulateTicket() {
  setTimeout(() => {
    const numberOfTicketsToCreate = Math.ceil(Math.random() * maxTicketsPerRelease);
    for (let i = 0; i < numberOfTicketsToCreate; i++) {
      tickets.push(createTicket());
    }
    newTickets = numberOfTicketsToCreate;
    setTimeout(() => { newTickets = '' }, 1500);
    circulateTicket();
  }, Math.random() * 5000);
}

circulateTicket();

setInterval(() => {
  updateTerminal(`  Tickets available: ${tickets.length}
  New tickets created: ${newTickets || 'none'}
  Fans:
  🙇‍♀️ Trying to get tickets:    ${fans.filter(f => f.state === '🙇‍♀️' && !f.ticket).length}
  🏃‍♀️ On the way to concert:    ${fans.filter(f => f.state === '🏃‍♀️' && f.ticket).length}
  👩‍🎤 Rocking out:              ${fans.filter(f => f.state === '👩‍🎤').length}
  🛌 Sleeping:                 ${fans.filter(f => f.state === '🛌').length}
  ${fans.map(f => f.state).join(' ')}
  `);
}, 100);
