/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExerciseOut } from '../models/ExerciseOut';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V1Service {
    /**
     * Get Exercises
     * @returns ExerciseOut Successful Response
     * @throws ApiError
     */
    public static getExercisesApiV1ExercisesGet(): CancelablePromise<Array<ExerciseOut>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/exercises',
        });
    }
}
