@@ .. @@
   return (
-    <a href="https://studoz.com" className={`block ${bgColor} rounded-lg p-6 transition-transform hover:scale-105`}>
+    <div className={`${bgColor} rounded-lg p-6 transition-transform hover:scale-105`}>
       <div className="flex justify-between items-start">
         <div>
           <div className="text-sm mb-2">Профессия</div>
@@ .. @@
         </div>
         <div className="w-12 h-12">{icon}</div>
       </div>
-    </a>
+      <div className="mt-4 space-y-2">
+        <a
+          href="https://studoz.com"
+          className="block text-center bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
+        >
+          Подробнее о курсе
+        </a>
+        <a
+          href="https://studoz.com"
+          className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
+        >
+          Начать обучение
+        </a>
+      </div>
+    </div>
   );