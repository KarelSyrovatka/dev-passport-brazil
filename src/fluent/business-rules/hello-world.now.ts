# karel update
import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { rejectInactiveTask } from '../../server/business-rules/reject-inactive-task'

export const helloWorldRejectsInactiveTaskRule = BusinessRule({
    $id: Now.ID['hello_world_rejects_inactive_task_rule'],
    name: 'Reject inactive Task on Hello World',
    table: 'x_2048625_dev_pass_hello_world',
    when: 'before',
    active: true,
    action: ['insert'],
    filterCondition: 'task.active=false',
    script: rejectInactiveTask,
})
