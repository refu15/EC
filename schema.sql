-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- KPI data table
CREATE TABLE kpi_data (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  sales NUMERIC NOT NULL,
  new_customers INTEGER NOT NULL,
  conversion_rate NUMERIC NOT NULL,
  average_order_value NUMERIC NOT NULL
);

-- Policy history table
CREATE TABLE policy_history (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  proposal_id INTEGER NOT NULL,
  status VARCHAR(255) NOT NULL, -- e.g., 'tried', 'dismissed', 'later'
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
