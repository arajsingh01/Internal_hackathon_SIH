import React from 'react'
import NavBar from '@/components/NavBar'

const page = () => {
    return (
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeVnxemndlfHR2DfLteD7_ZW_UNQo7NYNoA&s')] bg-cover">
            <NavBar />

            <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto my-10">
            <h2 class="text-red-600 text-[32px] font-bold mb-6 text-center">PCOS</h2>
                <form>
                    <div class="grid gap-4">
                        <div class="flex flex-col">
                            <label for="betaHCG1" class="mb-2 font-medium text-gray-700">1 beta-HCG (mIU/mL)</label>
                            <input type="number" id="betaHCG1" name="betaHCG1" class="border border-gray-300 rounded-lg p-2" placeholder="Enter 1 beta-HCG value"/>
                        </div>

                        <div class="flex flex-col">
                            <label for="betaHCG11" class="mb-2 font-medium text-gray-700">11 beta-HCG (mIU/mL)</label>
                            <input type="number" id="betaHCG11" name="betaHCG11" class="border border-gray-300 rounded-lg p-2" placeholder="Enter 11 beta-HCG value"/>
                        </div>

                        <div class="flex flex-col">
                            <label for="AMH" class="mb-2 font-medium text-gray-700">AMH (ng/ml)</label>
                            <input type="number" id="AMH" name="AMH" class="border border-gray-300 rounded-lg p-2" placeholder="Enter AMH value"/>
                        </div>
                    </div>

                    <button type="submit" class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full">
                        Submit
                    </button>
                </form>
            </div>


            <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md my-10">
                <h2 class="text-red-600 text-[32px] font-bold mb-6 text-center">RESULT</h2>
            </div>

            <footer className="bg-black text-white py-6">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 HealthInsights. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default page