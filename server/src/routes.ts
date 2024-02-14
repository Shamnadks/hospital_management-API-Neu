//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-get_appointment_flow-SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok
import { get_appointment_flow as SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok } from './sd-services/common/get_appointments/get_appointment_flow';
//CORE_REFERENCE_IMPORT-get_appointment_api-SSD_SERVICE_ID_sd_s7Dqt2H83bRphca8
import { get_appointment_api as SSD_SERVICE_ID_sd_s7Dqt2H83bRphca8 } from './sd-services/common/get_appointments/get_appointment_api';
//CORE_REFERENCE_IMPORT-appointment_api-SSD_SERVICE_ID_sd_xBgpGrAxrMfgsKKs
import { appointment_api as SSD_SERVICE_ID_sd_xBgpGrAxrMfgsKKs } from './sd-services/common/create_appointment/appointment_api';
//CORE_REFERENCE_IMPORT-appointment_service-SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJ
import { appointment_service as SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJ } from './sd-services/common/create_appointment/appointment_service';
//CORE_REFERENCE_IMPORT-payment_service-SSD_SERVICE_ID_sd_iApazhDXbeGyVtBa
import { payment_service as SSD_SERVICE_ID_sd_iApazhDXbeGyVtBa } from './sd-services/payment/payment_service';
//CORE_REFERENCE_IMPORT-payment_api-SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeOD
import { payment_api as SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeOD } from './sd-services/payment/payment_api';
//CORE_REFERENCE_IMPORT-filter_specific_service-SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j
import { filter_specific_service as SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j } from './sd-services/appointments/filter_specfic/filter_specific_service';
//CORE_REFERENCE_IMPORT-appointments_filter_api-SSD_SERVICE_ID_sd_qI1FgEF5Qg6Su2HR
import { appointments_filter_api as SSD_SERVICE_ID_sd_qI1FgEF5Qg6Su2HR } from './sd-services/appointments/filter_appointment/appointments_filter_api';
//CORE_REFERENCE_IMPORT-appointments_filter_service-SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfo
import { appointments_filter_service as SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfo } from './sd-services/appointments/filter_appointment/appointments_filter_service';
//CORE_REFERENCE_IMPORT-filter_user_service-SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD
import { filter_user_service as SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD } from './sd-services/users/filter_user/filter_user_service';
//CORE_REFERENCE_IMPORT-filter_user_api-SSD_SERVICE_ID_sd_OlWygWOlSGOizS9A
import { filter_user_api as SSD_SERVICE_ID_sd_OlWygWOlSGOizS9A } from './sd-services/users/filter_user/filter_user_api';
//CORE_REFERENCE_IMPORT-filter_doctor_service-SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS
import { filter_doctor_service as SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS } from './sd-services/doctors/filter_doctor/filter_doctor_service';
//CORE_REFERENCE_IMPORT-filter_doctor_api-SSD_SERVICE_ID_sd_WN1cwNteT7XRlirY
import { filter_doctor_api as SSD_SERVICE_ID_sd_WN1cwNteT7XRlirY } from './sd-services/doctors/filter_doctor/filter_doctor_api';
//CORE_REFERENCE_IMPORT-filter_department_service-SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5
import { filter_department_service as SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5 } from './sd-services/department/filter_department/filter_department_service';
//CORE_REFERENCE_IMPORT-filter_department_api-SSD_SERVICE_ID_sd_7PvugXUXmRHa3g0m
import { filter_department_api as SSD_SERVICE_ID_sd_7PvugXUXmRHa3g0m } from './sd-services/department/filter_department/filter_department_api';
//CORE_REFERENCE_IMPORT-update_appointment_status_service-SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM
import { update_appointment_status_service as SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM } from './sd-services/appointments/update_appointment_status/update_appointment_status_service';
//CORE_REFERENCE_IMPORT-update_appointment_status_api-SSD_SERVICE_ID_sd_ADMaiDiZnUmK75yJ
import { update_appointment_status_api as SSD_SERVICE_ID_sd_ADMaiDiZnUmK75yJ } from './sd-services/appointments/update_appointment_status/update_appointment_status_api';
//CORE_REFERENCE_IMPORT-create_appointment_service-SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2a
import { create_appointment_service as SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2a } from './sd-services/appointments/create_appointment/create_appointment_service';
//CORE_REFERENCE_IMPORT-create_user_service-SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXa
import { create_user_service as SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXa } from './sd-services/users/create_user/create_user_service';
//CORE_REFERENCE_IMPORT-update_doctor_service-SSD_SERVICE_ID_sd_mhuKmoTwxVKclwNX
import { update_doctor_service as SSD_SERVICE_ID_sd_mhuKmoTwxVKclwNX } from './sd-services/doctors/update_doctor/update_doctor_service';
//CORE_REFERENCE_IMPORT-update_doctor_api-SSD_SERVICE_ID_sd_hyeC8CsVYrjg7rox
import { update_doctor_api as SSD_SERVICE_ID_sd_hyeC8CsVYrjg7rox } from './sd-services/doctors/update_doctor/update_doctor_api';
//CORE_REFERENCE_IMPORT-create_doctor_service-SSD_SERVICE_ID_sd_45JgZ7OwsjvEYUcg
import { create_doctor_service as SSD_SERVICE_ID_sd_45JgZ7OwsjvEYUcg } from './sd-services/doctors/create_doctor/create_doctor_service';
//CORE_REFERENCE_IMPORT-create_doctor_api-SSD_SERVICE_ID_sd_XiO53B7Cd7Fbrhn3
import { create_doctor_api as SSD_SERVICE_ID_sd_XiO53B7Cd7Fbrhn3 } from './sd-services/doctors/create_doctor/create_doctor_api';
//CORE_REFERENCE_IMPORT-update_department_service-SSD_SERVICE_ID_sd_9d3akMmIsei4wjRS
import { update_department_service as SSD_SERVICE_ID_sd_9d3akMmIsei4wjRS } from './sd-services/department/update_department/update_department_service';
//CORE_REFERENCE_IMPORT-update_department_api-SSD_SERVICE_ID_sd_OnBEHsyGSJtuYIHJ
import { update_department_api as SSD_SERVICE_ID_sd_OnBEHsyGSJtuYIHJ } from './sd-services/department/update_department/update_department_api';
//CORE_REFERENCE_IMPORT-create_department_service-SSD_SERVICE_ID_sd_7wo0dUAyZGNCRTQn
import { create_department_service as SSD_SERVICE_ID_sd_7wo0dUAyZGNCRTQn } from './sd-services/department/create_department/create_department_service';
//CORE_REFERENCE_IMPORT-create_department_api-SSD_SERVICE_ID_sd_gphBUqeiZIyZQsAq
import { create_department_api as SSD_SERVICE_ID_sd_gphBUqeiZIyZQsAq } from './sd-services/department/create_department/create_department_api';

export const UserRoutes = [
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-get_appointment_flow-SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok
SSD_SERVICE_ID_sd_r0H8vsrn1p2lt1Ok,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-get_appointment_api-SSD_SERVICE_ID_sd_s7Dqt2H83bRphca8
SSD_SERVICE_ID_sd_s7Dqt2H83bRphca8,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-appointment_api-SSD_SERVICE_ID_sd_xBgpGrAxrMfgsKKs
SSD_SERVICE_ID_sd_xBgpGrAxrMfgsKKs,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-appointment_service-SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJ
SSD_SERVICE_ID_sd_eBuPhijos3M7fnVJ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-payment_service-SSD_SERVICE_ID_sd_iApazhDXbeGyVtBa
SSD_SERVICE_ID_sd_iApazhDXbeGyVtBa,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-payment_api-SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeOD
SSD_SERVICE_ID_sd_5uKBgMCMEY9EmeOD,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-filter_specific_service-SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j
SSD_SERVICE_ID_sd_swLoHJcJEoaYFd9j,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-appointments_filter_api-SSD_SERVICE_ID_sd_qI1FgEF5Qg6Su2HR
SSD_SERVICE_ID_sd_qI1FgEF5Qg6Su2HR,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-appointments_filter_service-SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfo
SSD_SERVICE_ID_sd_lRLqUDOgTWLPHbfo,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-filter_user_service-SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD
SSD_SERVICE_ID_sd_er58WUWxKEh6IEiD,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-filter_user_api-SSD_SERVICE_ID_sd_OlWygWOlSGOizS9A
SSD_SERVICE_ID_sd_OlWygWOlSGOizS9A,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-filter_doctor_service-SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS
SSD_SERVICE_ID_sd_FdlVrRt9r82JaAwS,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-filter_doctor_api-SSD_SERVICE_ID_sd_WN1cwNteT7XRlirY
SSD_SERVICE_ID_sd_WN1cwNteT7XRlirY,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-filter_department_service-SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5
SSD_SERVICE_ID_sd_kxabzJtnUwVxiUP5,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-filter_department_api-SSD_SERVICE_ID_sd_7PvugXUXmRHa3g0m
SSD_SERVICE_ID_sd_7PvugXUXmRHa3g0m,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-update_appointment_status_service-SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM
SSD_SERVICE_ID_sd_F8uRJxFxyYnAocyM,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-update_appointment_status_api-SSD_SERVICE_ID_sd_ADMaiDiZnUmK75yJ
SSD_SERVICE_ID_sd_ADMaiDiZnUmK75yJ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-create_appointment_service-SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2a
SSD_SERVICE_ID_sd_Fm1xxqvPxjmjZV2a,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-create_user_service-SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXa
SSD_SERVICE_ID_sd_1utwBDtR9iw7QRXa,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-update_doctor_service-SSD_SERVICE_ID_sd_mhuKmoTwxVKclwNX
SSD_SERVICE_ID_sd_mhuKmoTwxVKclwNX,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-update_doctor_api-SSD_SERVICE_ID_sd_hyeC8CsVYrjg7rox
SSD_SERVICE_ID_sd_hyeC8CsVYrjg7rox,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-create_doctor_service-SSD_SERVICE_ID_sd_45JgZ7OwsjvEYUcg
SSD_SERVICE_ID_sd_45JgZ7OwsjvEYUcg,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-create_doctor_api-SSD_SERVICE_ID_sd_XiO53B7Cd7Fbrhn3
SSD_SERVICE_ID_sd_XiO53B7Cd7Fbrhn3,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-update_department_service-SSD_SERVICE_ID_sd_9d3akMmIsei4wjRS
SSD_SERVICE_ID_sd_9d3akMmIsei4wjRS,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-update_department_api-SSD_SERVICE_ID_sd_OnBEHsyGSJtuYIHJ
SSD_SERVICE_ID_sd_OnBEHsyGSJtuYIHJ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-create_department_service-SSD_SERVICE_ID_sd_7wo0dUAyZGNCRTQn
SSD_SERVICE_ID_sd_7wo0dUAyZGNCRTQn,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-create_department_api-SSD_SERVICE_ID_sd_gphBUqeiZIyZQsAq
SSD_SERVICE_ID_sd_gphBUqeiZIyZQsAq,
];
