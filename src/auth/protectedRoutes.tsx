// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hook';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useAppSelector((state: RootState) => state.user.uid);

  return user ? children : <Navigate to="/signup" />
};

export default ProtectedRoute;
