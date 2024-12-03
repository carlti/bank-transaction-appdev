document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  function loginPage() {
    app.innerHTML = `
      <section class="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400">
        <!-- Card Container -->
        <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <!-- Welcome Header -->
          <div class="text-center mb-6">
            <h2 class="text-3xl font-bold text-gray-800">Welcome Back</h2>
            <p class="text-gray-600 text-sm">
              Access your account to manage transactions and more.
            </p>
          </div>
  
          <!-- Login Form -->
          <form id="loginForm" class="space-y-5">
            <!-- Username Field -->
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                placeholder="Enter your username"
                required
              >
            </div>
  
            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                placeholder="Enter your password"
                required
              >
            </div>
  
            <!-- Sign In Button -->
            <div>
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg shadow-lg font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all"
              >
                Sign In
              </button>
            </div>
          </form>
  
          <!-- Register Link -->
          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
              Don't have an account? 
              <button 
                onclick="registerPage()" 
                class="text-blue-500 font-medium hover:underline focus:outline-none"
              >
                Register here
              </button>
            </p>
          </div>
        </div>
      </section>
    `;
  
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
          // Store token and username in localStorage
          localStorage.setItem('token', data.token);
          localStorage.setItem('username', data.username);
          
          // Redirect to homepage
          homepage();
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
      }
    });
  }

  function registerPage() {
    app.innerHTML = `
  <section class="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400">
    <!-- Card Container -->
    <div class="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
      <!-- Header -->
      <div class="text-center mb-6">
        <h2 class="text-3xl font-bold text-gray-800">Create an Account</h2>
        <p class="text-gray-600 text-sm">
          Fill in your details to register.
        </p>
      </div>

      <!-- Registration Form -->
      <form id="registerForm" class="space-y-5">
        <!-- Username Field -->
        <div>
          <label for="username" class="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
            placeholder="Enter your username"
            required
          >
        </div>

        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
            placeholder="Enter your email"
            required
          >
        </div>

        <!-- Initial Balance Field -->
        <div>
          <label for="initialBalance" class="block text-sm font-medium text-gray-700">
            Initial Balance
          </label>
          <input
            type="number"
            id="initialBalance"
            name="initialBalance"
            class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
            placeholder="Enter initial balance (optional)"
            min="0"
            step="0.01"
          >
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-gray-800"
            placeholder="Enter your password"
            required
          >
        </div>

        <!-- Register Button -->
        <div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg shadow-lg font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-all"
          >
            Register
          </button>
        </div>
      </form>

      <!-- Back to Login Link -->
      <div class="mt-6 text-center">
        <p class="text-sm text-gray-600">
          Already have an account? 
          <button 
            onclick="loginPage()" 
            class="text-blue-500 font-medium hover:underline focus:outline-none"
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  </section>
`;

    document.getElementById('registerForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const initialBalance = document.getElementById('initialBalance').value || 0;

      try {
        // First, register the user
        const authResponse = await fetch('http://localhost:3000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password })
        });

        const authData = await authResponse.json();

        if (authResponse.ok) {
          // If user registration is successful, create a customer record
          const customerResponse = await fetch('http://localhost:3000/api/customers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              name: username, 
              email: email, 
              balance: parseFloat(initialBalance) 
            })
          });

          const customerData = await customerResponse.json();

          if (customerResponse.ok) {
            alert('Registration successful! Please log in.');
            loginPage();
          } else {
            // If customer creation fails, we might want to handle this 
            // potentially by rolling back the user registration
            alert(`Error creating customer: ${customerData.message}`);
          }
        } else {
          alert(authData.message);
        }
      } catch (error) {
        console.error('Registration error:', error);
        alert('An error occurred during registration');
      }
    });
  }

  // Logout function
  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    loginPage();
  }

  // Initial load
  const token = localStorage.getItem('token');
  token ? homepage() : loginPage();

  // Modify homepage to check authentication
  function homepage() {
    const token = localStorage.getItem('token');
    if (!token) {
      loginPage();
      return;
    }
    app.innerHTML = `
  <section class="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200 relative z-10 overflow-hidden">
  <!-- Background Decoration -->
  <div class="absolute inset-0 z-[-2]">
    <div class="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-br from-blue-500 to-green-500 opacity-30"></div>
    <div class="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-tl from-gray-800 to-blue-700 opacity-20"></div>
    <!-- Subtle Shapes -->
    <div class="absolute top-10 right-10 w-72 h-72 bg-gradient-to-tr from-green-400 via-blue-300 to-transparent rounded-full blur-3xl opacity-20"></div>
    <div class="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-500 via-gray-400 to-transparent rounded-full blur-3xl opacity-20"></div>
  </div>

  <!-- Welcome Text -->
  <h1 class="mb-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-800 text-center relative z-20">
    Welcome to Your Banking System
  </h1>
  <p class="mb-10 text-lg lg:text-xl font-medium text-gray-700 text-center sm:px-10 lg:px-32 relative z-20">
    Effortlessly manage customers and transactions with secure and seamless tools.
  </p>

  <!-- Action Buttons -->
  <div class="flex flex-wrap justify-center gap-6 relative z-20">
    <button 
      class="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50" 
      onclick="viewCustomers()">
      View All Customers
    </button>
    <button 
      class="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-lg shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-opacity-50" 
      onclick="viewTransfers()">
      View All Transfers
    </button>
    <button 
      class="px-8 py-3 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold text-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-400 focus:ring-opacity-50" 
      onclick="logout()">
      Logout
    </button>
  </div>
</section>
`;
  }

  async function fetchCustomers() {
    const response = await fetch('http://localhost:3000/api/customers');
    return await response.json();
  }

  async function createCustomer() {
    app.innerHTML = `
    <section class="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200 relative z-10">
  <!-- Background Decorations -->
  <div class="absolute inset-0 z-[-2]">
    <div class="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-br from-blue-500 to-green-500 opacity-30"></div>
    <div class="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-tl from-gray-800 to-blue-700 opacity-20"></div>
  </div>

  <!-- Form Container -->
  <div class="bg-white shadow-lg rounded-lg w-full max-w-lg p-8 relative z-20">
    <!-- Header -->
    <h1 class="text-4xl font-bold text-center mb-6 text-gray-800">
      Create New Customer
    </h1>
    <p class="text-center text-gray-600 mb-8">
      Fill in the details below to add a new customer to the system.
    </p>

    <!-- Form -->
    <form id="createCustomerForm" class="space-y-6">
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter customer's full name"
          required
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter customer's email"
          required
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <!-- Initial Balance -->
      <div>
        <label for="balance" class="block text-sm font-medium text-gray-700 mb-2">
          Initial Balance
        </label>
        <input
          id="balance"
          name="balance"
          type="number"
          min="0"
          step="0.01"
          placeholder="Enter initial balance"
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <!-- Buttons -->
      <div class="flex justify-between space-x-4">
        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-lg transition-all duration-300">
          Create Customer
        </button>
        <button
          type="button"
          onclick="viewCustomers()"
          class="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold shadow-lg transition-all duration-300">
          Cancel
        </button>
      </div>
    </form>
  </div>
</section>
  `;
  
  document.getElementById('createCustomerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      balance: parseFloat(formData.get('balance') || 0)
    };

    try {
      const response = await fetch('http://localhost:3000/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        alert('Customer created successfully!');
        viewCustomers();
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the customer');
    }
  });
}

async function editCustomer(customerId) {
  try {
    // Fetch the specific customer details
    const response = await fetch(`http://localhost:3000/api/customers/${customerId}`);
    const customer = await response.json();

    app.innerHTML = `
  <section class="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200 relative z-10">
  <!-- Background Decorations -->
  <div class="absolute inset-0 z-[-2]">
    <div class="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-br from-blue-500 to-green-500 opacity-30"></div>
    <div class="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-tl from-gray-800 to-blue-700 opacity-20"></div>
  </div>

  <!-- Form Container -->
  <div class="bg-white shadow-lg rounded-lg w-full max-w-lg p-8 relative z-20">
    <!-- Header -->
    <h1 class="text-4xl font-bold text-center mb-6 text-gray-800">
      Edit Customer
    </h1>
    <p class="text-center text-gray-600 mb-8">
      Update the details of the selected customer below.
    </p>

    <!-- Form -->
    <form id="editCustomerForm" class="space-y-6">
      <!-- Hidden ID -->
      <input type="hidden" id="customerId" name="customerId" value="${customer._id}" />

      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value="${customer.name}"
          placeholder="Enter customer's full name"
          required
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value="${customer.email}"
          placeholder="Enter customer's email"
          required
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <!-- Current Balance -->
      <div>
        <label for="balance" class="block text-sm font-medium text-gray-700 mb-2">
          Current Balance
        </label>
        <input
          id="balance"
          name="balance"
          type="number"
          value="${customer.balance}"
          min="0"
          step="0.01"
          placeholder="Enter current balance"
          class="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <!-- Buttons -->
      <div class="flex justify-between space-x-4">
        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold shadow-lg transition-all duration-300">
          Update Customer
        </button>
        <button
          type="button"
          onclick="viewCustomers()"
          class="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-semibold shadow-lg transition-all duration-300">
          Cancel
        </button>
      </div>
    </form>
  </div>
</section>
`;

    document.getElementById('editCustomerForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        balance: parseFloat(formData.get('balance'))
      };

      try {
        const response = await fetch(`http://localhost:3000/api/customers/${customerId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
          alert('Customer updated successfully!');
          viewCustomers();
        } else {
          alert(`Error: ${result.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while updating the customer');
      }
    });
  } catch (error) {
    console.error('Error fetching customer details:', error);
    alert('Failed to load customer details');
  }
}

async function deleteCustomer(customerId) {
  if (confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
    try {
      const response = await fetch(`http://localhost:3000/api/customers/${customerId}`, {
        method: 'DELETE'
      });

      const result = await response.json();

      if (response.ok) {
        alert('Customer deleted successfully!');
        viewCustomers();
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the customer');
    }
  }
}

async function viewCustomers() {
  const customers = await fetchCustomers();
  app.innerHTML = `
    <section class="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200 relative z-10">
      <!-- Background Decorations -->
      <div class="absolute inset-0 z-[-2]">
        <div class="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-br from-blue-500 to-green-500 opacity-30"></div>
        <div class="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-tl from-gray-800 to-blue-700 opacity-20"></div>
      </div>

      <!-- Header and Buttons -->
      <div class="flex justify-between w-full max-w-5xl items-center my-8 px-4 z-20">
        <h1 class="text-2xl font-bold mb-4 text-left ml-24">CUSTOMER'S RECORD</h1>
        <div class="space-x-4">
          <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded" onclick="createCustomer()">Add New Customer</button>
          <button class="mt-4 bg-gray-500 text-white px-4 py-2 rounded" onclick="homepage()">Back to Homepage</button>
        </div>
      </div>

      <!-- Customer Table -->
      <div class="relative shadow-md sm:rounded-lg z-20 ml-24 mb-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">NAME</th>
              <th scope="col" class="px-6 py-3">EMAIL</th>
              <th scope="col" class="px-6 py-3">CURRENT BALANCE</th>
              <th scope="col" class="px-6 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            ${customers
              .map(
                (customer) => `
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${customer.name}</td>
              <td class="px-6 py-3">${customer.email}</td>
              <td class="px-6 py-3">$${customer.balance}</td>
              <td class="px-6 py-3 space-x-2">
                <button type="button" class="px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-100 inline-block" onclick="viewCustomer('${customer._id}')">View</button>
                <button type="button" class="px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-100 inline-block" onclick="editCustomer('${customer._id}')">Edit</button>
                <button type="button" class="px-3 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-100 inline-block" onclick="deleteCustomer('${customer._id}')">Delete</button>
              </td>
            </tr>
          `)
              .join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

async function viewCustomer(id) {
  const response = await fetch(`http://localhost:3000/api/customers/${id}`);
  const customer = await response.json();
  app.innerHTML = `
    <section class="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-blue-100 to-gray-200 relative z-10">
      <div class="absolute inset-0 z-[-2]">
        <div class="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-br from-blue-500 to-green-500 opacity-30"></div>
        <div class="absolute bottom-0 right-0 h-1/2 w-full bg-gradient-to-tl from-gray-800 to-blue-700 opacity-20"></div>
      </div>

      <!-- Customer Details -->
      <div class="w-full max-w-lg z-20">
        <h1 class="text-2xl font-bold mb-4 text-center">${customer.name}'s Account Details</h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Email:</td>
                <td class="px-3 py-4">${customer.email}</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Current Balance:</td>
                <td class="px-3 py-4">$${customer.balance}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-between mt-4">
          <button class="bg-green-500 text-white px-4 py-2 rounded" onclick="initiateTransfer('${customer._id}')">Transfer Money</button>
          <button class="bg-gray-500 text-white px-4 py-2 rounded" onclick="viewCustomers()">Back to Customers</button>
        </div>
      </div>
    </section>
  `;
}

async function initiateTransfer(fromId) {
  const customers = await fetchCustomers();
  const fromCustomer = customers.find((c) => c._id === fromId);
  const filteredCustomers = customers.filter((c) => c._id !== fromId);

  app.innerHTML = `
  <div id="alertContainer" class="fixed top-2 left-0 w-full z-50 flex justify-center"></div>
  <div class="min-h-screen bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 flex items-center justify-center">
    <div class="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
      <h1 class="text-2xl font-bold mb-10 text-center">TRANSFER MONEY</h1>
      <form id="transferForm" class="space-y-4">
        <div class="mb-5">
          <label for="from" class="block mb-2 text-sm font-medium text-gray-900">From:</label>
          <input type="text" id="from" name="fromName" value="${fromCustomer.name} (Balance: $${fromCustomer.balance})"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" readonly>
        </div>
        <input type="hidden" name="from" value="${fromId}">
        <div class="mb-5">
          <label for="to" class="block mb-2 text-sm font-medium text-gray-900">Select Customer to Transfer To:</label>
          <select name="to" id="to" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onchange="populateEmail(this.value)">
            ${filteredCustomers.map((customer, index) => `
              <option value="${customer._id}" ${index === 0 ? 'selected' : ''}>${customer.name} (Balance: $${customer.balance})</option>
            `).join('')}
          </select>
        </div>
        <div class="mb-5">
          <label for="emailField" class="block mb-2 text-sm font-medium text-gray-900">Email:</label>
          <input type="text" id="emailField" name="email" value="${filteredCustomers.length > 0 ? filteredCustomers[0].email : ''}"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" readonly>
        </div>
        <div class="mb-5">
          <label for="amount" class="block mb-2 text-sm font-medium text-gray-900">Amount:</label>
          <input type="number" name="amount" id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" min="1" required>
        </div>
        <div class="flex justify-between mb-5">
          <button type="submit" class="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-100 rounded w-1/2 px-5 py-2.5 text-center">Transfer</button>
          <div class="w-2"></div>
          <button type="button" class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded w-1/2 px-5 py-2.5 text-center" onclick="viewCustomers()">Back to Customers</button>
        </div>
        <button type="button" class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 w-full" onclick="viewTransfers()">View All Transfers</button>
      </form>
    </div>
  </div>`;

  document.getElementById('transferForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        from: formData.get('from'),
        to: formData.get('to'),
        amount: parseInt(formData.get('amount')),
    };

    const response = await fetch('http://localhost:3000/api/transfers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    const alertContainer = document.getElementById('alertContainer');

    if (response.ok) {
        const successAlert = document.createElement('div');
        successAlert.classList.add(
            'inline-flex',
            'items-center',
            'p-4',
            'mb-4',
            'text-sm',
            'text-green-800',
            'rounded-lg',
            'bg-green-50'
        );
        successAlert.setAttribute('role', 'alert');
        successAlert.innerHTML = `
            <span class="sr-only">Success</span>
            <div class="inline">
                <span class="font-medium">Congratulations! </span> Transfer Successful ✅
            </div>
        `;
        alertContainer.appendChild(successAlert);

        setTimeout(() => {
            successAlert.remove();
        }, 5000);
    } else {
        const errorAlert = document.createElement('div');
        errorAlert.classList.add(
            'flex',
            'items-center',
            'p-4',
            'mb-4',
            'text-sm',
            'text-red-800',
            'rounded-lg',
            'bg-red-50'
        );
        errorAlert.setAttribute('role', 'alert');
        errorAlert.innerHTML = `
            <span class="sr-only">Error</span>
            <div class="inline">
                <span class="font-medium">Error! </span> Transfer Failed ❌
            </div>
        `;
        alertContainer.appendChild(errorAlert);
        setTimeout(() => {
            errorAlert.remove();
        }, 5000);
    }
  });
}

async function populateEmail(customerId) {
  const customers = await fetchCustomers();
  const selectedCustomer = customers.find((c) => c._id === customerId);
  document.getElementById('emailField').value = selectedCustomer.email;
}

async function viewTransfers() {
  // Get the logged-in username from localStorage
  const username = localStorage.getItem('username');
  
  // Fetch transfers with a query to get only transfers for the current user
  const response = await fetch(`http://localhost:3000/api/transfers?username=${username}`);
  const transfers = await response.json();
  
  app.innerHTML = `
    <div class="flex justify-between justify-center my-8">
      <h1 class="text-2xl font-bold mb-4 text-left ml-24">MY TRANSACTION HISTORY</h1>
      <button class="mt-4 bg-gray-500 text-white px-4 py-2 rounded" onclick="homepage()">Back to Homepage</button>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-24 mb-10">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">From (Sender)</th>
            <th scope="col" class="px-6 py-3">To (Receiver)</th>
            <th scope="col" class="px-6 py-3">Amount Transferred</th>
            <th scope="col" class="px-6 py-3">Transaction Date & Time</th>
          </tr>
        </thead>
        <tbody>
          ${transfers.length > 0 ? transfers
            .map(
              (transfer) => `
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="px-6 py-3">${
                transfer.from ? transfer.from.name : 'Unknown'
              } <br>(${transfer.from ? transfer.from.email : 'Unknown'})</td>
              <td class="px-6 py-3">${
                transfer.to ? transfer.to.name : 'Unknown'
              } <br>(${transfer.to ? transfer.to.email : 'Unknown'})</td>
              <td class="px-6 py-3">$${transfer.amount}</td>
              <td class="px-6 py-3">${new Date(
                transfer.date
              ).toLocaleString()}</td>
            </tr>
          `
            )
            .join('') : `
            <tr>
              <td colspan="4" class="text-center py-4 text-gray-500">
                No transactions found.
              </td>
            </tr>
          `}
        </tbody>
      </table>
    </div>
  `;
}


  // Initializing the homepage
  homepage();

  // Exposing functions to the global window scope
  window.viewCustomer = viewCustomer;
  window.initiateTransfer = initiateTransfer;
  window.viewTransfers = viewTransfers;
  window.viewCustomers = viewCustomers;
  window.homepage = homepage;
  window.populateEmail = populateEmail;
  // Add these to the window global scope
  window.createCustomer = createCustomer;
  window.deleteCustomer = deleteCustomer;
  window.editCustomer = editCustomer;
  window.loginPage = loginPage;
  window.registerPage = registerPage;
  window.homepage = homepage;
  window.logout = logout;
});