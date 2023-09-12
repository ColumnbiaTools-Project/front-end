import { QueryClient } from "@tanstack/react-query";

// QueryClient를 생성하고 내보내기
const getQueryClient = () => { return new QueryClient(); }

export default getQueryClient;
