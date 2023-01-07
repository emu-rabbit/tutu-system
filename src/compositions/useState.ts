import { computed, shallowRef } from 'vue'
import useProgress from './useProgress'

type StateData<T> = {
    progress: InRange<0, 100>,
    message: string,
    state: T
}

export default function <State> (states: StateData<State>[]) {
    const { progress, message } = useProgress()
    const stateInner = shallowRef(states[0].state)
    const state = computed({
        get: () => stateInner.value,
        set: (newState: State) => {
            const data = states.find(d => d.state === newState)
            if (!data) {
                console.warn(`State not found in data ${newState}`)
                return
            }
            stateInner.value = data.state
            progress.value = data.progress
            message.value = data.message
        }
    })
    state.value = states[0].state

    return {
        progress,
        message,
        state
    }
}
