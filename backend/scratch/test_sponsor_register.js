const http = require('http');

const PORT = 5001;

function request(method, path, data) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(data);
    const req = http.request(
      {
        hostname: 'localhost',
        port: PORT,
        path: path,
        method: method,
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          resolve({
            statusCode: res.statusCode,
            body: JSON.parse(body),
          });
        });
      }
    );
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function runTests() {
  const uniqueEmail = `sponsor_${Date.now()}@example.com`;
  const username = `sponsor_${Date.now()}`;

  console.log('--- Test 1: Register a new Sponsor ---');
  try {
    const res = await request('POST', '/register/sponsor', {
      username,
      email: uniqueEmail,
      password: 'mypassword123',
    });
    console.log('Status Code:', res.statusCode);
    console.log('Body:', JSON.stringify(res.body, null, 2));

    if (
      res.statusCode === 201 &&
      res.body.success === true &&
      res.body.data.email === uniqueEmail &&
      res.body.data.password === undefined &&
      res.body.data.is_active === false
    ) {
      console.log('✅ Test 1 Passed: Successfully registered Sponsor account with is_active: false and user-provided password.');
    } else {
      console.error('❌ Test 1 Failed!');
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Test 1 Error:', err.message);
    process.exit(1);
  }

  console.log('\n--- Test 2: Register with duplicate email ---');
  try {
    const res = await request('POST', '/register/sponsor', {
      username: `other_${username}`,
      email: uniqueEmail, // duplicate email
      password: 'mypassword123',
    });
    console.log('Status Code:', res.statusCode);
    console.log('Body:', JSON.stringify(res.body, null, 2));

    if (
      res.statusCode === 400 &&
      res.body.success === false &&
      res.body.message === 'Registration information already exists.'
    ) {
      console.log('✅ Test 2 Passed: Duplicate email was correctly blocked with the requested error message.');
    } else {
      console.error('❌ Test 2 Failed!');
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Test 2 Error:', err.message);
    process.exit(1);
  }

  console.log('\nAll tests completed successfully!');
}

runTests();
