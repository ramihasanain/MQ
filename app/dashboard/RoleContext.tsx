"use client";
import { createContext } from 'react';

export const RoleContext = createContext<'موظف' | 'مسؤول'>('مسؤول');
