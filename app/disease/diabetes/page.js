import React from 'react'
import NavBar from '@/components/NavBar'

const page = () => {
    return (
        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeVnxemndlfHR2DfLteD7_ZW_UNQo7NYNoA&s')] bg-cover">
            <NavBar />

            <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md my-10">
                <h2 class="text-red-600 text-[32px] font-bold mb-6 text-center">DIABETES</h2>

                <form class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                    <div>
                        <label for="pregnancies" class="block text-sm font-medium text-gray-700">Pregnancies</label>
                        <input id="pregnancies" type="number" class="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter number of pregnancies" />
                    </div>

                    <div>
                        <label for="glucose" class="block text-sm font-medium text-gray-700">Glucose</label>
                        <input id="glucose" type="number" class="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter glucose level" />
                    </div>

                    <div>
                        <label for="skin-thickness" class="block text-sm font-medium text-gray-700">Skin Thickness</label>
                        <input id="skin-thickness" type="number" class="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter skin thickness" />
                    </div>

                    <div>
                        <label for="insulin" class="block text-sm font-medium text-gray-700">Insulin</label>
                        <input id="insulin" type="number" class="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter insulin level" />
                    </div>

                    <div>
                        <label for="bmi" class="block text-sm font-medium text-gray-700">BMI</label>
                        <input id="bmi" type="number" step="0.01" class="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter BMI" />
                    </div>

                    <div>
                        <label for="diabetes-pedigree" class="block text-sm font-medium text-gray-700">Diabetes Pedigree Function</label>
                        <input id="diabetes-pedigree" type="number" step="0.01" class="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter pedigree function" />
                    </div>


                    <div>
                        <label for="age" class="block text-sm font-medium text-gray-700">Age</label>
                        <input id="age" type="number" class="mt-1 block w-full border border-gray-300 rounded-lg p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter age" />
                    </div>



                    <div class="col-span-1 sm:col-span-2 lg:col-span-3">
                        <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
                    </div>
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