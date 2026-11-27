import { gs, GlideRecord } from '@servicenow/glide'

export function rejectInactiveTask(current: GlideRecord<'x_2048625_dev_pass_hello_world'>, previous: GlideRecord<'x_2048625_dev_pass_hello_world'>) {
    gs.addErrorMessage('Hello CMA Fall 2026!');
    current.setAbortAction(true)
}
