import { foo } from './index'

describe('foo', () => {

    it('should return the Hello string', () => {

        expect(foo()).toEqual('Hello, World!!!')

    })

})
