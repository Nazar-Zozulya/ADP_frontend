import { useEffect, useState } from "react";
import { Course } from "../types";

export function useCourses() {
    const [courses, setCourses] = useState<Course[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>();

    async function getCourses() {
        try {
            setIsLoading(true);
            const response = await fetch("http://127.0.0.1:8000/api/courses/all");

            const result = await response.json();

            if (result.status === "success") {
                setCourses(result.data);
            } else {
                setError(result.message);
            }
        } catch (error) {
            const err = error instanceof Error ? error.message : undefined;
            setError(`${err}`);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getCourses()
    }, [])

    return {courses, isLoading, error, refetch: getCourses}
}
