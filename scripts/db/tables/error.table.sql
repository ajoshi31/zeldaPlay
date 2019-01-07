CREATE TABLE errors (
  id VARCHAR(12) PRIMARY KEY DEFAULT createId('00E'),
  message TEXT,
  code TEXT,
  error_time TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
  stack TEXT
)
