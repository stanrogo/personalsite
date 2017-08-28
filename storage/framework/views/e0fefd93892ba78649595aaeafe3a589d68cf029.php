<?php $__env->startSection('page-template'); ?>

    <div id="work">
        <div class="grid-container">

            <div class="WorkTimeLineGraphic"></div>

            <h1 class="section-heading">I'm currently here:</h1>

            <?php $__currentLoopData = $work; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $job): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                <?php if(!$job->getEnd()): ?>

                    <?php echo $__env->make('includes.job', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

                <?php endif; ?>

            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

            <hr>

            <h1 class="section-heading">I used to work here:</h1>

            <?php $__currentLoopData = $work; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $job): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                <?php if($job->getEnd()): ?>

                    <?php echo $__env->make('includes.job', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

                <?php endif; ?>

            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('default', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>