import { useCourses } from "../../modules/courses/hooks"
import { CourseCard } from "../../modules/courses/ui"
import "./page.style.css"

export function CoursesListPage(){
    const { courses, error, isLoading } = useCourses()


    return(
        <div className="courses-page">
            <div className="search-bar">
                <div className="search-input">
                    <input type="text" placeholder="Пошук..." />
                </div>
                <div className="search-button">
                    <button>search</button>
                </div>
            </div>
            <div className="courses-list">
                { isLoading ? <div>loading</div> : 
                error ? <div>{error}</div> :
                courses?.map((course)=>{
                    return(
                        <CourseCard image={course.image} name={course.name} description={course.description} author={course.author} ></CourseCard>
                    )
                })
                }
            </div>
        </div>
    )
}