jest.setTimeout(300000)

async function getKeyForCode(code: string): Promise<string> {
	const result = await page.evaluate(`sorensen.getKeyForCode(${JSON.stringify(code)})`)
	expect(typeof result).toBe('string')

	return result as string
}

describe('Sørensen.getKeyForCode', () => {
	beforeAll(async () => {
		await Promise.all([page.goto('http://localhost:9000/index.html'), page.waitForNavigation()])
	}, 10000)

	// these tests assume running on an US-English machine

	it('converts "KeyW" to "w"', async () => {
		const result = await getKeyForCode('KeyW')
		expect(result).toBe('w')
	})

	it('converts "Enter" to "Enter"', async () => {
		const result = await getKeyForCode('Enter')
		expect(result).toBe('Enter')
	})
})
