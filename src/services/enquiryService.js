import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const submitEnquiry = async (event_name, customer_name, email, token) => {
  const response = await axios.post(
    `${API_URL}/submit-enquiry`,
    { event_name, customer_name, email },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};
