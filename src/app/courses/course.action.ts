import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";

export const loadAllCourses = createAction(
    '[Courses Resolver] Load All Courses'
);

export const allCoursesLoaded = createAction(
    '[Load courses effect] All courses loaded'
    , props<{ courses: Array<Course> }>()
);
