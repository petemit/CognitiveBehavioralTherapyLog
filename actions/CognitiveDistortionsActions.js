export const RECEIVE_CDS = "RECEIVE_CDS"

function receiveCds(cds) {
    return {
        type: RECEIVE_CDS,
        cds
    }
}