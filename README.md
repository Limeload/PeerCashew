# LendSphere

> Open-source peer-to-peer lending platform — connecting borrowers and investors directly.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Ruby](https://img.shields.io/badge/ruby-3.x-red.svg)](https://www.ruby-lang.org/)
[![Rails](https://img.shields.io/badge/rails-7.x-red.svg)](https://rubyonrails.org/)
[![React](https://img.shields.io/badge/react-17.x-blue.svg)](https://reactjs.org/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-14%2B-blue.svg)](https://www.postgresql.org/)

LendSphere is a full-stack web application that lets borrowers post loan requests and investors fund them — no bank in the middle. It is built with a Rails 7 API backend, a React frontend, and a PostgreSQL database.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Data Model](#data-model)
- [API Reference](#api-reference)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Features

| Feature | Status |
|---------|--------|
| User registration & login (session-based auth) | ✅ |
| Loan requests (create, browse, update, delete) | ✅ |
| Investment flow — fund any open loan | ✅ |
| **Loan status workflow** — `pending → funded → active → repaid / defaulted` | ✅ |
| **Payment tracking** — schedule, record, and mark payments as paid | ✅ |
| **Loan filtering & search** — by status, amount range, rate, term | ✅ |
| **Email notifications** — status changes, new investments, payment reminders | ✅ |
| User profile — edit details, delete account | ✅ |
| Dashboard & status board | ✅ |
| Loan calculator | ✅ |
| Stripe payment integration | 🔲 stretch goal |
| Google Maps address verification | 🔲 stretch goal |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 17, React Router 5, React Bootstrap |
| Backend | Ruby on Rails 7 (API mode) |
| Database | PostgreSQL |
| Auth | `has_secure_password` + cookie-based sessions |
| Email | ActionMailer (SMTP-configurable) |
| Deployment | [Render](https://render.com) |

---

## Data Model

```
users
  id, email, password_digest, name, date_of_birth, address

loans
  id, borrower_id → users, title, description,
  amount, interest_rate, term_length,
  status (pending | funded | active | repaid | defaulted)

investors
  id, lender_id → users, loan_id → loans,
  investment_amount, interest_rate, status

payments
  id, loan_id → loans, payer_id → users,
  amount, scheduled_date, paid_date, status (scheduled | paid | overdue)
```

### Loan Status Transitions

```
pending ──► funded ──► active ──► repaid
   │            │         │
   └────────────┴─────────┴──► defaulted
```

---

## API Reference

### Auth
| Method | Path | Description |
|--------|------|-------------|
| POST | `/signup` | Register a new user |
| POST | `/login` | Log in |
| DELETE | `/logout` | Log out |
| GET | `/me` | Return the current session user |

### Users
| Method | Path | Description |
|--------|------|-------------|
| GET | `/users` | List all users |
| GET | `/users/:id` | Show a user |
| PATCH | `/users/:id` | Update a user |
| DELETE | `/users/:id` | Delete a user |
| GET | `/users/:id/loans` | Loans belonging to a user |
| GET | `/users/:id/investors` | Investments belonging to a user |

### Loans
| Method | Path | Description |
|--------|------|-------------|
| GET | `/loans` | List loans (supports `?status=`, `?min_amount=`, `?max_amount=`, `?min_rate=`, `?max_rate=`, `?term_length=`) |
| POST | `/loans` | Create a loan |
| GET | `/loans/:id` | Show a loan |
| PATCH | `/loans/:id` | Update a loan |
| DELETE | `/loans/:id` | Delete a loan |
| PATCH | `/loans/:id/transition` | Transition loan status (`{ status: "funded" }`) |

### Payments
| Method | Path | Description |
|--------|------|-------------|
| GET | `/loans/:loan_id/payments` | List payments for a loan |
| POST | `/loans/:loan_id/payments` | Schedule a payment |
| GET | `/loans/:loan_id/payments/:id` | Show a payment |
| PATCH | `/loans/:loan_id/payments/:id` | Update a payment (e.g. mark paid) |
| DELETE | `/loans/:loan_id/payments/:id` | Delete a payment |

### Investors
| Method | Path | Description |
|--------|------|-------------|
| GET | `/investors` | List all investments |
| POST | `/investors` | Create an investment |
| GET | `/investors/:id` | Show an investment |
| PATCH | `/investors/:id` | Update an investment |
| DELETE | `/investors/:id` | Delete an investment |

---

## Getting Started

### Prerequisites

- Ruby 3.x
- Rails 7.x (`gem install rails`)
- Node 16+
- PostgreSQL 14+

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/lendsphere.git
cd lendsphere
```

### 2. Backend setup

```bash
bundle install
rails db:create db:migrate db:seed
rails s -p 3000
```

The Rails API will be available at `http://localhost:3000`.

### 3. Frontend setup

```bash
cd client
npm install
npm start
```

The React app will be available at `http://localhost:4000` and proxies API calls to port 3000.

### 4. Email (optional, development)

To preview emails locally, add this to `config/environments/development.rb`:

```ruby
config.action_mailer.delivery_method = :letter_opener
config.action_mailer.perform_deliveries = true
```

Then add the `letter_opener` gem to your Gemfile.

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Full PostgreSQL connection URL (production) |
| `LENDSPHERE_DATABASE_PASSWORD` | DB password (production) |
| `RAILS_MASTER_KEY` | Decrypts `config/credentials.yml.enc` |
| `RAILS_LOG_TO_STDOUT` | Set to `true` on Render / Heroku |
| `RAILS_SERVE_STATIC_FILES` | Set to `true` to serve the React build |
| `SMTP_HOST` | SMTP server host for ActionMailer |
| `SMTP_PORT` | SMTP server port |
| `SMTP_USER` | SMTP username |
| `SMTP_PASSWORD` | SMTP password |

---

## Deployment

LendSphere is configured for [Render](https://render.com).

1. Set all environment variables in Render's dashboard.
2. Build command: `bundle install && rails db:migrate && cd client && npm install && npm run build`
3. Start command: `bundle exec puma -C config/puma.rb`

Live demo: [https://lendsphere.onrender.com](https://lendsphere.onrender.com)

---

## Roadmap

- [ ] Stripe payment integration
- [ ] Google Maps address verification
- [ ] Real-time chat between borrower and investor (Action Cable)
- [ ] Secondary market — sell investments to other investors
- [ ] Machine learning credit scoring
- [ ] Mobile app (React Native)
- [ ] Multi-currency support

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

1. Fork the repo
2. Create your branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

Please follow the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

*Built with care by [Shraddha Rao](https://github.com/Limeload)*
