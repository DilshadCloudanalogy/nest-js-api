import { Injectable } from "@nestjs/common";
export class RequestService {
    private userId: string
    setUserId(userId: string) {
        this.userId = userId
    }
    getUserId() {
        return this.userId
    }
}