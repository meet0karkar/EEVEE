import { message } from "antd";
import api from "../auth/api";

export const addAmount = async (data) => {
    console.log(data, "================================")
    try {
      const response = await api.post('/user/plan', data);
      message.success(response.data.data.message);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message ;
      message.error(errorMessage);
    }
  }
  
  export const getAmoutListApi = async () => {
    console.log("================================")
    try {
      const response = await api.get('/user/plan');
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }

  export const createPaymentApi = async (data) => {
    console.log("================================eeeee")
    try {
      const response = await api.post('/user/payment',data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }

  export const getTransactionHistoryApi = async (planId) => {
    console.log("================================savan",planId)
    try {
      const response = await api.get('/user/transaction',{params:{planId}});
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message;
      message.error(errorMessage);
    }
  }
  