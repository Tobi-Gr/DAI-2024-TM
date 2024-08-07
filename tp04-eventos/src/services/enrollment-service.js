import EnrollmentRepository from '../repositories/enrollment-repository.js';
const repo = new EnrollmentRepository();

export default class EnrollmentService {
    createAsync = async (entity) => {
        const created = await repo.createAsync(entity);
        console.log("Enrollment: ", created);
        return created;
    }

    countEnrolledAsync = async (id_event) => {
        const count = await repo.countEnrolledAsync(id_event);
        return count;
    }

    getByUserIdAndEventId = async (id_user) => {
        const registration = await repo.getByUserIdAndEventId(id_user);
        return registration;
    }
}
